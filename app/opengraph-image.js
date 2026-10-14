import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";

export const alt = "Minseo Kim, Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colours mirror styles/_variables.scss ($vdark-color, $vlight-color, $vlight-blue).
const OpenGraphImage = async () => {
  const photo = await readFile(
    join(
      process.cwd(),
      "public/images/profile/profile-picture-square-1024x1024.jpeg"
    )
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          backgroundColor: "#0b0c10",
        }}
      >
        <img
          src={photoSrc}
          alt="Minseo Kim"
          width={300}
          height={300}
          style={{ borderRadius: "50%", border: "6px solid #66fcf1" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, color: "#e5e6e7" }}>
            Minseo Kim
          </div>
          <div style={{ fontSize: 40, color: "#66fcf1", marginTop: 12 }}>
            Software Engineer
          </div>
          <div style={{ fontSize: 32, color: "#c5c6c7", marginTop: 32 }}>
            minseokim.com
          </div>
        </div>
      </div>
    ),
    size
  );
};

export default OpenGraphImage;
