import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-[1100px] m-auto pb-10 mt-20">
      <div className="text-center px-5 py-10">
        <p className="text-4xl font-bold">Política de Privacidade</p>
        <p className="text-xl text-gray-600">
          Última atualização: 29 Janeiro 2025
        </p>
      </div>
      {/* Descrição completa */}
      <div className="mt-10 px-10">
        <h2 className="text-3xl font-bold mb-5">
          1. Informações que Coletamos
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          Podemos coletar e processar os seguintes dados:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600 text-lg leading-7">
          <li>
            <strong>Informações fornecidas por você:</strong> Nome, e-mail,
            telefone e outros dados inseridos nos formulários.
          </li>
          <li>
            <strong>Dados de navegação:</strong> Endereço IP, tipo de
            dispositivo, navegador, páginas visitadas.
          </li>
          <li>
            <strong>Cookies:</strong> Tecnologias utilizadas para melhorar sua
            experiência de navegação.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-5">
          2. Como Utilizamos suas Informações
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          Utilizamos os dados coletados para:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600 text-lg leading-7">
          <li>Fornecer e melhorar nossos serviços.</li>
          <li>Personalizar a experiência do usuário.</li>
          <li>Enviar comunicações sobre nossos serviços e atualizações.</li>
          <li>Garantir segurança e prevenir fraudes.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-5">
          3. Compartilhamento de Dados
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          Seus dados podem ser compartilhados com:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600 text-lg leading-7">
          <li>
            <strong>Fornecedores de serviços terceirizados:</strong> Para
            hospedagem e análise de dados.
          </li>
          <li>
            <strong>Autoridades legais:</strong> Se exigido por lei.
          </li>
          <li>
            <strong>Parceiros comerciais:</strong> Apenas com seu consentimento.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-5">
          4. Armazenamento e Proteção dos Dados
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          Adotamos medidas técnicas para proteger suas informações contra
          acessos não autorizados, perdas e alterações.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-5">5. Seus Direitos</h2>
        <p className="text-gray-600 text-lg leading-7">
          Você pode acessar, corrigir ou excluir seus dados pessoais. Para
          exercer seus direitos, entre em contato pelo e-mail siteparastand@gmail.com.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-5">
          6. Cookies e Tecnologias de Rastreamento
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          Utilizamos cookies para melhorar sua experiência. Você pode gerenciar
          suas preferências de cookies nas configurações do seu navegador.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-5">
          7. Alterações na Política de Privacidade
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          Podemos atualizar esta política periodicamente. Recomendamos que você
          reveja esta página regularmente para estar ciente de eventuais
          alterações.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-5">8. Contato</h2>
        <p className="text-gray-600 text-lg leading-7">
          Caso tenha dúvidas sobre esta Política de Privacidade, entre em
          contato conosco pelo e-mail siteparastand@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
