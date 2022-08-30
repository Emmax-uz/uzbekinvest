import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../Styles/Newslatter.css'

export default function Newslatter() {
  const { t } = useTranslation(); 
  return (
    <section className='Newsletter'>
      <div className="container">
        <div className='newsletter-info'>
          <div className='newsletter-info__info'>
            <div>
              <h3 className='newsletter-info__info-title'>Newslatter</h3>
              <p className='newsletter-info__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, diam et, duis aliquet lectus.</p>
            </div>
          </div>
          <div className='newsletter-info__send'>
            <input className='newsletter-info__input' type="email" name="" id="" placeholder='Your Email' />
            <button className='newsletter-info__btn'>{t('send')}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
