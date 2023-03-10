declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string;
      CONTENTFUL_ACCESS_TOKEN: string;
      CONTENTFUL_ENVIRONMENT: string;
      CONTENTFUL_PREVIEW_TOKEN: string;
      CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN: string;
    }
  }
}
export {};
