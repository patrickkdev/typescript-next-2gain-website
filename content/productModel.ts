export interface BestFeature {
    title: string;
    subtitle: string;
}

export interface Product {
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    videoUrl: string;
    downloadLinkPC: string;
    downloadLinkIos: string;
    downloadLinkAndroid: string;
    bestFeatures: BestFeature[];
}

export interface ProductModel {
    products: Product[];
}