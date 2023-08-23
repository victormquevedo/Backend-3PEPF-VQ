import { FactoryCarts, FactoryMessages, FactoryProducts, FactoryTickets, FactoryUsers } from '../dao/factory.js';
import ProductsRepository from './products.repositories.js';
import CartsRepository from './carts.repositories.js';
import MessagesRepository from './messages.repositories.js';
import UsersRepository from './users.repositories.js';
import TicketsRepository from './tickets.repositories.js';

const productsService = new ProductsRepository( FactoryProducts );
const cartsService = new CartsRepository( FactoryCarts );
const messagesService = new MessagesRepository( FactoryMessages );
const usersService = new UsersRepository( FactoryUsers );
const ticketsService = new TicketsRepository( FactoryTickets );

export { productsService, cartsService, messagesService, usersService, ticketsService };
