declare module 'fslightbox' {
  interface FSLightboxInstance {
    open: (sources: string[]) => void;
    // Add any other methods or properties you use
  }

  const fslightbox: () => FSLightboxInstance;
  export = fslightbox;
}