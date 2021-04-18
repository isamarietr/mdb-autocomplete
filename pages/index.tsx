import { GetStaticProps } from 'next';
import React from 'react'
import { Container } from 'react-bootstrap';
import getConfig from 'next/config'
import Autocomplete from '../components/Autocomplete';
import Layout from '../components/Layout';

const { publicRuntimeConfig } = getConfig()

type Props = {
  indexField: string
}

export default function Home(props: Props) {
  return (
    <Layout title="Home">
      <Container fluid className="pt-5 mx-auto" >
        <Autocomplete indexField={props.indexField} />
      </Container>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const indexField = publicRuntimeConfig.index.field
  return { props: { indexField } }
}