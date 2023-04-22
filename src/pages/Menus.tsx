import React from 'react';

import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import config from '../config/index.json';
import styles from '../styles/Menus.module.css';

const { menu, menus } = config;
const prefix = 'website/';

const Menus = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
      >
        <Header />
      </div>
      <LazyShow>
        <div className={`py-12 bg-background`} id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <div style={{ margin: '50px' }}>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Menus
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  {menu.description}
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 'auto',
                  gap: '50px',
                }}
              >
                {menus.map((item) => (
                  <a
                    target="_blank"
                    key={item.name}
                    href={prefix + item.href}
                    rel="noreferrer"
                    className={styles.anchor}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <LazyShow>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <a
                    target="_blank"
                    href="/assets/images/Drinks Menu (31623).pdf"
                  >
                    3/16/23
                  </a>
                </p>
              </LazyShow> */}
            </div>
          </div>
        </div>
      </LazyShow>
    </div>
  );
};

export default Menus;
