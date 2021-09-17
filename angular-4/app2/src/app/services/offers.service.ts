import { Offer } from '../shared/offer.model';

export class OffersService {
    public Offers: Array<Offer> = [
        {
            id: 1,
            category: 'restaurante',
            title: 'Super Burger',
            description: 'Rodízio de Mini-hamburger com opção de entrada.',
            advertiser: 'Original Burger',
            price: 29.9,
            emphasis: true,
            images: [
                { url: '/assets/ofertas/1/img1.jpg' },
                { url: '/assets/ofertas/1/img2.jpg' },
                { url: '/assets/ofertas/1/img3.jpg' },
                { url: '/assets/ofertas/1/img4.jpg' }
            ]
        },
        {
            id: 2,
            category: 'restaurante',
            title: 'Cozinha Mexicana',
            description: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
            advertiser: 'Mexicana',
            price: 32.9,
            emphasis: true,
            images: [
                { url: '/assets/ofertas/2/img1.jpg' },
                { url: '/assets/ofertas/2/img2.jpg' },
                { url: '/assets/ofertas/2/img3.jpg' },
                { url: '/assets/ofertas/2/img4.jpg' }
            ]
        },
        {
            id: 4,
            category: 'diversao',
            title: 'Estância das águas',
            description:
                'Diversão garantida com piscinas, trilhas e muito mais.',
            advertiser: 'Estância das águas',
            price: 31.9,
            emphasis: true,
            images: [
                { url: '/assets/ofertas/3/img1.jpg' },
                { url: '/assets/ofertas/3/img2.jpg' },
                { url: '/assets/ofertas/3/img3.jpg' },
                { url: '/assets/ofertas/3/img4.jpg' },
                { url: '/assets/ofertas/3/img5.jpg' },
                { url: '/assets/ofertas/3/img6.jpg' }
            ]
        }
    ];

    public getOffers(): Array<Offer> {
        return this.Offers;
    }

    public getOffersPromise(): Promise<Offer[]> {
        return new Promise((resolve, reject) => {
            const status = true;

            if (status) {
                setTimeout(() => resolve(this.Offers), 3000);
            } else {
                reject({ error: 404, message: 'Server not found.' });
            }
            resolve(this.Offers);
        });
    }
}
