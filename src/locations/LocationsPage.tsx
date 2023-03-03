import { Card, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Location } from "./Location";

function LocationsPage(props: any) {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState<Location[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function getData(): Promise<Location[] | void> {
    setLoading(true);
    try {
      const data = await fetch(
        "https://api.coastal.ca.gov/access/v1/locations",
        {
          method: "GET",
        }
      );
      const data_1 = await data.json();
      const data_2 = data_1 as Location[];
      setLocations(data_2);
      setLoading(false);
    } catch (e: any) {
      setError(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const picturedLocations = locations?.filter(
    (location) => location.Photo_1 !== ""
  );
  return (
    <Container sx={{width:"95%", padding:3}}>
    <div>
      <h1>Locations</h1>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {picturedLocations &&
          picturedLocations.map((location) => (
            <Card
              key={location.ID}
              elevation={5}
              sx={{
                width: 250,
                borderRadius: 2,
                height: 420,
                position: "relative",
                margin: 2,
              }}
            >
              <h2
                style={{
                  position: "absolute",
                  top: 270,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: 5,
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                {location.NameMobileWeb}
              </h2>
              {location.Photo_1 && (
                <img src={location.Photo_1} alt={location.NameMobileWeb} />
              )}
            </Card>
          ))}
      </div>
    </div>
    </Container>
  );
}

export default LocationsPage;
