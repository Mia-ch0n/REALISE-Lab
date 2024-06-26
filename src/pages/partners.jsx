import React from "react";
import "tailwindcss/tailwind.css";
import Layout from'@theme/Layout';
import "../css/custom.css";


const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Mozilla organization',
      collaboration_topics: 'performance engineering',
      imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png'
    },
    {
      id: 2,
      name: 'MongoDB',
      collaboration_topics: 'performance engineering',
      imageUrl:
      'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png'
    },
    {
      id: 3,
      name: 'Mozilla organization',
      collaboration_topics: 'dependency management',
      imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png'
    },
    {
      id: 4,
      name: 'Mozilla organization',
      collaboration_topics: 'dependency management',
      imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png'
    },
    {
      id: 5,
      name: 'Mozilla organization',
      collaboration_topics: 'dependency management',
      imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png'
    },
    {
      id: 6,
      name: 'Mozilla organization',
      collaboration_topics: 'dependency management',
      imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png'
    },
  
  ];

  return (
    <Layout>
      <div className="bg-gray-900/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl gradient">Our partners</h2>
            <p className="mt-8 text-lg leading-8 text-gray-600 whitespace-nowrap">
              REALISE Lab collaborates with leading partners in order to deliver well-curated research
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {partners.map((partner) => (
              <article key={partner.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={partner.imageUrl}>
                      <span className="absolute inset-0 border" />
                      <img className="mx-auto h-24 w-24 mb-10" src={partner.imageUrl} alt="" width="500" height="600"/>
                      <h5>{partner.name}</h5>
                    </a>
                  </h3>
                  <h5>Collaboration topics: </h5><p>{partner.collaboration_topics}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
