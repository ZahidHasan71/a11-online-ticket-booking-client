import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#131B2B] text-white px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold text-primary">TicketBari</h2>
                    <p className="mt-2 text-sm">
                        Book bus, train, launch & flight tickets easily. Your trusted travel partner for comfortable journeys across the country.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="link link-hover">Home</a></li>
                        <li><a href="/tickets" className="link link-hover">All Tickets</a></li>
                        <li><a href="/contact" className="link link-hover">Contact Us</a></li>
                        <li><a href="/about" className="link link-hover">About</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="footer-title">Contact Info</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: <a href="mailto:support@ticketbari.com" className="link link-hover">support@ticketbari.com</a></li>
                        <li>Phone: <a href="tel:+8801234567890" className="link link-hover">+880 1234-567890</a></li>
                        <li>Facebook: <a href="https://facebook.com/ticketbari" target="_blank" className="link link-hover">facebook.com/ticketbari</a></li>
                    </ul>
                </div>

                {/* Payment Methods */}
                <div>
                    <h3 className="footer-title">Payment Methods</h3>
                    <div className="flex gap-4 mt-2">
                        <img src="/stripe.png" alt="Stripe" className="h-6" />
                        <img src="/visa.png" alt="Visa" className="h-6" />
                        <img src="/mastercard.png" alt="Mastercard" className="h-6" />
                    </div>
                </div>
            </div>
            <div className="divider max-w-7xl mx-auto"></div>
            {/* Copyright */}
            <div className="mt-10 text-center text-sm text-gray-500">
                © 2025 TicketBari. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;