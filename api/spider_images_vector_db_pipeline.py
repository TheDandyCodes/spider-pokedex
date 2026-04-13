import requests
from time import sleep
from tqdm import tqdm

url = "https://api.inaturalist.org/v2/observations"
params = {
    "taxon_id": 47118,  # Araneae
    "quality_grade": "research",
    "per_page": 200,
    # Campos explícitos para evitar anidamiento profundo
    "fields": (
        "id,uuid,observed_on,quality_grade,species_guess,place_guess,"
        "latitude,longitude,geojson,"
        "taxon.id,taxon.name,taxon.rank,taxon.preferred_common_name,"
        "photos.url,photos.attribution,photos.license_code"  # ← esto faltaba
    )
}

observations = []
page = 1
max_pages = 2  # 10k observaciones

while page <= max_pages:
    params["page"] = page
    resp = requests.get(url, params=params)
    resp.raise_for_status()
    data = resp.json()
    
    results = data.get("results", [])
    if not results:
        break
    
    for obs in tqdm(results, desc=f"  Obs pág {page}"):
        taxon = obs.get("taxon", {})
        geo = obs.get("geojson", {}) or {}
        coords = geo.get("coordinates", [None, None])
        photos = obs.get("photos", [])
        
        # Extraer URLs de imágenes si existen
        image_urls = [img.get("url").replace("square", "original") for img in photos] if photos else []
        
        flat_obs = {
            "id": obs.get("id"),
            "uuid": obs.get("uuid"),
            "observed_on": obs.get("observed_on"),
            "quality_grade": obs.get("quality_grade"),
            "species_guess": obs.get("species_guess"),
            "place_guess": obs.get("place_guess"),
            "latitude": obs.get("latitude") or coords[1] if len(coords) > 1 else None,
            "longitude": obs.get("longitude") or coords[0] if len(coords) > 0 else None,
            "taxon_id": taxon.get("id"),
            "taxon_name": taxon.get("name"),
            "taxon_rank": taxon.get("rank"),
            "iconic_taxon": taxon.get("iconic_taxon_name"),
            "num_images": len(image_urls),
            "image_urls": image_urls,
            "first_image_url": image_urls[0]
        }
        
        observations.append(flat_obs)
     
    page += 1
    sleep(0.2)  # Rate limiting

df = pd.DataFrame(observations)
df.to_csv("araneae_inaturalist_completo.csv", index=False)

print(f"\n✅ Dataset creado: {len(df)} observaciones")
print(f"Columnas: {list(df.columns)}")