// intrinsic pixel dimensions of the /public/partners/*.png files, used so
// next/image can preserve aspect ratio while CSS pins every logo to a fixed height.
export const PARTNER_LOGO_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/partners/partner-armenu.png": { width: 911, height: 910 },
  "/partners/partner-bukhari.png": { width: 339, height: 244 },
  "/partners/partner-galiano.png": { width: 935, height: 534 },
  "/partners/partner-muhur.png": { width: 338, height: 286 },
  "/partners/partner-rubin.png": { width: 361, height: 372 },
};
