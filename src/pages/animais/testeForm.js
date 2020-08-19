import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import DateInput from '~/components/DateInput';
import { ContainerForm } from './styles';
import casoApi from '~/logicas/CasosApi';

export default function CadastroAnimal() {
  const [caso, setCaso] = useState([]);

  useEffect(() => {
    async function loadCaso() {
      const response = await casoApi.listaCasoId(4);
      casoApi.ConverteDatasCaso(response.data);
      setCaso(response.data);
    }
    loadCaso();
  }, []);

  return (
    <ContainerForm>
      <Form initialData={caso}>
        <Input name="id" hidden />
        <label htmlFor="exampleInput1">Data</label>
        <DateInput name="data_nascimento" dado={caso.data_nascimento} />

        <hr />
        <button type="submit">Salvar</button>
      </Form>
    </ContainerForm>
  );
}
