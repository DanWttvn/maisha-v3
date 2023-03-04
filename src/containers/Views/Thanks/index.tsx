import React, { FC, useContext } from 'react'
import DataText from 'components/DataText'
import LanguageContext from 'contexts/language'
import MainLayout from 'containers/Layouts/Main'

const Thanks: FC = () => {
  const { lang } = useContext(LanguageContext)

  return (
    <MainLayout>
      <DataText type="text" styles={{ margin: 'auto' }}>
        {lang === 'ES' && 'Gracias por tu aportación!'}
        {lang === 'EN' && 'Thanks for your contribution!'}
        {lang === 'SW' && 'Asante kwa mchango wako!'}
      </DataText>
    </MainLayout>
  )
}

export default Thanks
