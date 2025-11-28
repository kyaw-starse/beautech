import React from 'react'

import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';
const AccessSectionComponent = () => {
  return (
    <div className="bg-[#dce5ea] py-16 md:py-32">
      <div id="access" className="container mx-auto">
      <TitleEngJPComponent titleEn1="" titleJp="アクセス" className="mb-6 md:mb-10">
        <span className="text-pinkBrand">A</span>CCESS
      </TitleEngJPComponent>
      <p className="text-sm md:text-base leading-loose flex flex-row items-start mb-5 md:mb-8">
        <span>所在地：</span>
        <span>東京都中央区築地6丁目1-9 <br className="md:hidden" />門跡木村ビル2F</span>
      </p>
      <div className="w-full h-[285px] md:h-[570px] px-0 md:px-12 lg:px-16">
        <iframe
          src="https://www.google.com/maps?q=東京都中央区築地6丁目1-9 門跡木村ビル2F&hl=ja&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-sm md:text-base leading-loose flex flex-row items-start mb-5 md:mb-8 mt-5 md:mt-0">
        <span>メトロ：</span>
        <p className='inline'>築地駅 徒歩5分<br className="md:hidden" /><span className="hidden md:inline">、</span>東銀座 徒歩10分</p>
      </div>
      </div>
    </div>
  )
}

export default AccessSectionComponent;
