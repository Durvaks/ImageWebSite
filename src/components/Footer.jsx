import React from 'react';

const Footer = () => {
    return (
        <footer className="opacity-90 bg-slate-950 min-h-[200px] flex items-center justify-center">
            <div className="text-white text-center space-y-6">
                <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Visions Beyond Imagination</p>
                <p className="mb-4">Desenvolvido por Renan Brandão</p>
                <div className="flex justify-center space-x-4">
                    <div>
                        <p className="font-semibold">Entre em contato:</p>
                        <a href="mailto:renanbrandaorj@gmail.com" className="text-white underline">renanbrandaorj@gmail.com</a>
                    </div>
                    <div>
                        <p className="font-semibold">Portfólio pessoal:</p>
                        <a href="https://seuportfolio.com" className="text-white underline">Acesse aqui meu Protifolio</a>
                    </div>
                    <div>
                        <p className="font-semibold">LinkedIn:</p>
                        <a href="https://www.linkedin.com/in/seulinkedin" className="text-white underline">Acesse aqui meu LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;