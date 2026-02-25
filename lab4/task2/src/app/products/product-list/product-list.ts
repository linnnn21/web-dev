import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCard} from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 128GB',
    description: 'NanoSIM+eSIM черный',
    price: 407099,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000'
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 17 Pro',
    description: '256Gb NanoSIM+eSIM оранжевый',
    price: 815002,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000'
  },
  {
    id: 3,
    name: 'Смарт-часы Huawei WATCH GT 6',
    description: '41 мм золотистый',
    price: 99122,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/huawei-watch-gt-6-41-mm-zolotistyi-zolotistyi-147986879/?c=750000000'
  },
  {
    id: 4,
    name: 'Электронная книга Amazon Kindle Paperwhite 2024',
    description: '(12th Generation) черный',
    price: 100524,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pad/p78/5902840.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2024-12th-generation-chernyi-129285472/?c=750000000'
  },
  {
    id: 5,
    name: 'Чехол для Apple iPhone 11',
    description: 'прозрачный',
    price: 10,
    rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hf3/86260519796766.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000'
  },
  {
    id: 6,
    name: 'Фитнес-браслет WHOOP 5.0 PEAK',
    description: 'черный + подписка 12 месяцев',
    price: 143051,
    rating: 3.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p59/50063334.png?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/whoop-5-0-peak-chernyi-podpiska-12-mesjatsev-141065130/?c=750000000'
  },
  {
    id: 7,
    name: 'Смартфон Xiaomi Redmi Note 14 Pro',
    description: '12 ГБ/512 ГБ фиолетовый',
    price: 202504,
    rating: 4.3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p4b/pbd/73805545.png?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-12-gb-512-gb-fioletovyi-134217124/?c=750000000'
  },
  {
    id: 8,
    name: 'Кабель VARIUM USB 4 Type-C (M)',
    description: '1 м, VTT03 белый',
    price: 1999,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p33/58883993.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/kabel-varium-usb-4-type-c-m-1-m-vtt03-belyi-144182006/?c=750000000'
  },
  {
    id: 9,
    name: 'Смартфон Apple iPhone 16 128Gb',
    description: 'NanoSIM+eSIM черный',
    price: 492900,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-nanosim-esim-chernyi-123713453/?c=750000000'
  },
  {
    id: 10,
    name: 'Зарядное устройство OIU GAN PRO 30W Lightning',
    description: ' USB Type-C 30 Вт белый',
    price: 32990,
    rating: 4.2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3e/p04/89256025.jpeg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/oiu-gan-pro-30w-lightning-usb-type-c-30-vt-belyi-145376225/?c=750000000'
  }
];

}