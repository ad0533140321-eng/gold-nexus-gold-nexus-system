import { prisma } from '@/lib/db';
import { StockStatus, ProductCategory } from '@/generated/prisma/client';
import { Decimal } from '@prisma/client-runtime-utils';

async function main() {
  console.log('Start seeding PRODUCTION...');

  // --- KARAT SEEDING ---
  console.log('Seeding Karat values...');
  const karatData = [
    { name: '24K', purity: new Decimal(0.999) },
    { name: '22K', purity: new Decimal(0.9167) },
    { name: '18K', purity: new Decimal(0.75) },
    { name: '14K', purity: new Decimal(0.5833) },
    { name: '10K', purity: new Decimal(0.4167) },
  ];

  for (const k of karatData) {
    await prisma.karat.upsert({
      where: { name: k.name },
      update: {},
      create: {
        name: k.name,
        purity: k.purity,
      },
    });
  }
  console.log('Karat seeding finished.');

  // --- PRODUCT SEEDING ---
  console.log('Seeding Base Products...');

  const BAR_IMAGE =
    'https://hduwnmepfmibxuyfkhtf.supabase.co/storage/v1/object/public/gold-nexus-images/EXAMPLE-BAR-001.png';
  const COIN_IMAGE =
    'https://hduwnmepfmibxuyfkhtf.supabase.co/storage/v1/object/public/gold-nexus-images/EXAMPLE-COIN-002.png';
  const JEWELRY_IMAGE =
    'https://hduwnmepfmibxuyfkhtf.supabase.co/storage/v1/object/public/gold-nexus-images/EXAMPLE-JWLR-003.png';

  type ProductCreateInput = {
    sku: string;
    name: string;
    description: string;
    price: number;
    weight: number;
    karat: string;
    category: ProductCategory;
    imageUrl: string;
    vendorName: string;
    stockStatus: StockStatus;
    isActive: boolean;
    isFeatured: boolean;
  };

  const baseProducts: ProductCreateInput[] = [
    {
      sku: 'GNB-PAMP-1OZ-PROD',
      name: '1 oz PAMP Suisse Gold Bar',
      description:
        'The PAMP Suisse 1 oz gold bar represents the pinnacle of Swiss craftsmanship, featuring the iconic Lady Fortuna design. Each bar is individually assayed and sealed in CertiPAMP™ packaging.',
      price: 2689.5,
      weight: 31.1,
      karat: '24K',
      category: ProductCategory.BAR,
      imageUrl: BAR_IMAGE,
      vendorName: 'PAMP Suisse',
      stockStatus: StockStatus.IN_STOCK,
      isActive: true,
      isFeatured: true,
    },
    {
      sku: 'GNC-EAGLE-1OZ-PROD',
      name: '1 oz American Gold Eagle Coin',
      description:
        'The official gold bullion coin of the United States, the American Gold Eagle is cherished by investors and collectors alike. Its 22K composition makes it more durable than pure gold coins.',
      price: 2745.0,
      weight: 31.1,
      karat: '22K',
      category: ProductCategory.COIN,
      imageUrl: COIN_IMAGE,
      vendorName: 'US Mint',
      stockStatus: StockStatus.IN_STOCK,
      isActive: true,
      isFeatured: true,
    },
    {
      sku: 'GNJ-NECKLACE-18K-PROD',
      name: '18K Gold Chain Necklace',
      description:
        'A stunning 18K gold chain necklace, perfect for daily wear or special occasions. Meticulously crafted to ensure durability and shine.',
      price: 1250.0,
      weight: 15.5,
      karat: '18K',
      category: ProductCategory.JEWELRY,
      imageUrl: JEWELRY_IMAGE,
      vendorName: 'Gold Nexus Collection',
      stockStatus: StockStatus.IN_STOCK,
      isActive: true,
      isFeatured: true,
    },
    {
      sku: 'GNB-VALCAMBI-100G-PROD',
      name: '100g Valcambi Gold Bar',
      description:
        'Valcambi is a leading Swiss refiner known for outstanding quality. This 100g gold bar is .9999 fine and comes in a sealed assay card.',
      price: 8650.0,
      weight: 100,
      karat: '24K',
      category: ProductCategory.BAR,
      imageUrl: BAR_IMAGE,
      vendorName: 'Valcambi',
      stockStatus: StockStatus.IN_STOCK,
      isActive: true,
      isFeatured: true,
    },
  ];

  for (const productData of baseProducts) {
    await prisma.product.upsert({
      where: { sku: productData.sku },
      update: {
        isFeatured: productData.isFeatured,
        imageUrl: productData.imageUrl, // Ensure image is updated if it changed
        // We might want to update other fields too if we change them in the seed
        name: productData.name,
        description: productData.description,
        price: productData.price,
        stockStatus: productData.stockStatus,
      },
      create: productData,
    });
  }

  console.log(`Seeding finished for ${baseProducts.length} base products.`);
  console.log('Skipping User, Order, and Lead seeding for Production.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
