import { Geist, Geist_Mono, Noto_Sans, Source_Code_Pro, Ubuntu_Mono, Ubuntu_Sans_Mono, Ubuntu_Sans, IBM_Plex_Mono } from "next/font/google";


const ubuntuMonoLight = Ubuntu_Mono({ weight: "400" });
const ubuntuMonoHeavy = Ubuntu_Mono({ weight: "700" });
const ibmPlexMono     = IBM_Plex_Mono({ weight: "400" });
const notoSans        = Noto_Sans({ weight: "variable" });
const ubuntuSans      = Ubuntu_Sans({ weight: "variable" });
const sourceCodePro   = Source_Code_Pro({ weight: "variable" });
const ubuntuSansMono  = Ubuntu_Sans_Mono({ weight: "variable"});
const geistSans       = Geist({ variable: "--font-geist-sans" });
const geistMono       = Geist_Mono({ variable: "--font-geist-mono" });

export {
  notoSans,
  geistMono,
  geistSans,
  ubuntuSans,
  ibmPlexMono,
  sourceCodePro,
  ubuntuSansMono,
  ubuntuMonoLight,
  ubuntuMonoHeavy,
}

