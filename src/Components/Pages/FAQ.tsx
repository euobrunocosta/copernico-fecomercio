import React, { useState } from 'react'
import styled from 'styled-components'
import { Accordion, Modal } from 'react-bootstrap'
import Container from 'Components/Container/Container'
import basketBallImage from 'Assets/images/basketBall.jpg'
import chevronUpIcon from 'Assets/images/icons/chevronUp.png'
import chevronDownIcon from 'Assets/images/icons/chevronDown.png'
import arrowIcon from 'Assets/images/icons/arrow.png'

const Wrapper = styled.div`
  background: url(${basketBallImage}) no-repeat;
  background-position: center right;
  padding: 100px 530px 100px 100px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    padding: 0;
    background: unset;
  }
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.RED};
  font-size: 50px;
  margin-bottom: 75px;
`

type TAccordionHeaderProps = {
  isOpened: boolean
}

const AccordionHeader = styled.div<TAccordionHeaderProps>`
  padding: 15px;
  padding-right: 40px;
  background: url(${p => (p.isOpened ? chevronUpIcon : chevronDownIcon)})
    no-repeat;
  background-position: center right 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  cursor: pointer;
`

const AccordionContent = styled.div`
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  font-weight: 300;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.YELLOW};
  background-image: url(${arrowIcon});
  background-repeat: no-repeat;
  background-position: center right 15px;
  color: ${({ theme }) => theme.colors.WHITE};
  border: none;
  padding: 5px 50px 5px 40px;
  margin-top: 30px;
  border-radius: 6px;
  font-size: 15px;
`

const CustomModalHeader = styled(Modal.Header)`
  button {
    border: none;
    background-color: transparent;
    font-size: 30px;
    span:last-child {
      display: none;
    }
  }
`

const initialStatus = Array.from({ length: 17 }, () => false)

const FAQ = () => {
  const [status, setStatus] = useState(initialStatus)
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const onClickShowModal = () => setShowModal(true)

  const onClickChangeStatus = (index: number) => () => {
    const _status = status.map((item, _index) =>
      index === _index ? !item : false
    )
    setStatus(_status)
  }
  return (
    <Container>
      <Wrapper>
        <Title>FAQ</Title>
        <Accordion>
          <div>
            <Accordion.Toggle
              as={AccordionHeader}
              eventKey="0"
              onClick={onClickChangeStatus(0)}
              isOpened={status[0]}
            >
              Como é o cálculo do valor a ser pago mensalmente pela locação das
              quotas do condomínio?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <AccordionContent>
                Todos os meses, você pagará ao veículo da Copérnico
                (“Copérnico”) um preço, que englobará os valores relativos ao
                aluguel das quotas do condomínio e à operação e manutenção da
                usina solar utilizada para geração compartilhada de energia. O
                total a ser pago é o valor de energia consumida por você no mês
                de referência multiplicado pela tarifa do mês com o desconto
                oferecido pela geração compartilhada. Exemplo: se o seu consumo
                atual é de 1.000 kWh/mês, sua tarifa do mês é de R$ 0,60/kWh e
                seu desconto é de 10%, você terá de pagar, entre aluguel e
                operação e manutenção, um total de R$ 540,00 à Copérnico ao
                invés de pagar R$ 600,00 à distribuidora.
              </AccordionContent>
            </Accordion.Collapse>
          </div>
          <div>
            <Accordion.Toggle
              as={AccordionHeader}
              eventKey="1"
              onClick={onClickChangeStatus(1)}
              isOpened={status[1]}
            >
              Como é o cálculo do valor a ser pago mensalmente pela locação das
              quotas do condomínio?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <AccordionContent>
                Com base no consumo descrito na sua conta de energia elétrica,
                conseguiremos entender a sazonalidade de consumo ao longo do
                último ano e dentro de cada dia do seu negócio.
              </AccordionContent>
            </Accordion.Collapse>
          </div>
          <div>
            <Accordion.Toggle
              as={AccordionHeader}
              eventKey="2"
              onClick={onClickChangeStatus(2)}
              isOpened={status[2]}
            >
              Quem pode aderir à geração compartilhada?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <AccordionContent>
                Qualquer pessoa física, empresa ou estabelecimento comercial
                regularmente inscrito perante a Receita Federal do Brasil (i.e.,
                com CNPJ) pode aderir à geração compartilhada da Copérnico. Se a
                conta de energia elétrica do seu negócio estiver cadastrada no
                seu CPF, você também poderá se cadastrar.
              </AccordionContent>
            </Accordion.Collapse>
          </div>
          <div>
            <Accordion.Toggle
              as={AccordionHeader}
              eventKey="3"
              onClick={onClickChangeStatus(3)}
              isOpened={status[3]}
            >
              Como essa energia chega para mim?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <AccordionContent>
                Você locará quotas de um condomínio de uma usina solar
                juntamente com outras empresas e/ou pessoas físicas. Esta usina
                injetará a energia solar que for gerada no sistema da
                distribuidora de sua região. Por sua vez, a distribuidora vai
                continuar lhe fornecendo energia elétrica. A distribuidora
                compensará a energia que você consumir com a energia que você
                gerar com a sua locação de quotas do condomínio.
              </AccordionContent>
            </Accordion.Collapse>
          </div>
          <div>
            <Accordion.Toggle
              as={AccordionHeader}
              eventKey="4"
              onClick={onClickChangeStatus(4)}
              isOpened={status[4]}
            >
              Como eu sei quantas quotas eu deverei locar do condomínio?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <AccordionContent>
                Com base na sua última conta de energia elétrica, avaliamos
                quanta energia o condomínio precisa gerar para compensar o
                volume de energia que você está consumindo mensalmente. Nós
                calculamos a quantidade de quotas que você precisa locar para
                receber o montante de energia que precisa. Isso está evidenciado
                na sua Proposta Comercial.
              </AccordionContent>
            </Accordion.Collapse>
          </div>
        </Accordion>
        <Button type="button" onClick={onClickShowModal}>
          Exibir todas
        </Button>
      </Wrapper>
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <CustomModalHeader closeButton>
          <Modal.Title>FAQ</Modal.Title>
        </CustomModalHeader>
        <Modal.Body>
          <Accordion>
            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="16"
                onClick={onClickChangeStatus(16)}
                isOpened={status[16]}
              >
                Quanto eu consigo economizar com a locação de quotas do
                condomínio de geração compartilhada? Que desconto eu posso ter
                no meu custo de energia elétrica?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="16">
                <AccordionContent>
                  Com a locação de quotas do condomínio de geração
                  compartilhada, você terá um desconto sobre o seu atual custo
                  de energia elétrica junto à sua distribuidora. Calcularemos
                  esse desconto com base no seu perfil de consumo, o qual será
                  formalizado na Proposta Comercial que lhe será encaminhada.
                  Vale lembrar que, ao locar as quotas do condomínio, você
                  poderá deixar de pagar as bandeiras tarifárias amarela,
                  vermelha e vermelha II sobre parcela ou a totalidade do seu
                  consumo. Então, sua economia será ainda maior.
                </AccordionContent>
              </Accordion.Collapse>
            </div>
            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="0"
                onClick={onClickChangeStatus(0)}
                isOpened={status[0]}
              >
                Como é o cálculo do valor a ser pago mensalmente pela locação
                das quotas do condomínio?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <AccordionContent>
                  Todos os meses, você pagará ao veículo da Copérnico
                  (“Copérnico”) um preço, que englobará os valores relativos ao
                  aluguel das quotas do condomínio e à operação e manutenção da
                  usina solar utilizada para geração compartilhada de energia. O
                  total a ser pago é o valor de energia consumida por você no
                  mês de referência multiplicado pela tarifa do mês com o
                  desconto oferecido pela geração compartilhada. Exemplo: se o
                  seu consumo atual é de 1.000 kWh/mês, sua tarifa do mês é de
                  R$ 0,60/kWh e seu desconto é de 10%, você terá de pagar, entre
                  aluguel e operação e manutenção, um total de R$ 540,00 à
                  Copérnico ao invés de pagar R$ 600,00 à distribuidora.
                </AccordionContent>
              </Accordion.Collapse>
            </div>
            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="1"
                onClick={onClickChangeStatus(1)}
                isOpened={status[1]}
              >
                Como é o cálculo do valor a ser pago mensalmente pela locação
                das quotas do condomínio?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <AccordionContent>
                  Com base no consumo descrito na sua conta de energia elétrica,
                  conseguiremos entender a sazonalidade de consumo ao longo do
                  último ano e dentro de cada dia do seu negócio.
                </AccordionContent>
              </Accordion.Collapse>
            </div>
            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="2"
                onClick={onClickChangeStatus(2)}
                isOpened={status[2]}
              >
                Quem pode aderir à geração compartilhada?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <AccordionContent>
                  Qualquer pessoa física, empresa ou estabelecimento comercial
                  regularmente inscrito perante a Receita Federal do Brasil
                  (i.e., com CNPJ) pode aderir à geração compartilhada da
                  Copérnico. Se a conta de energia elétrica do seu negócio
                  estiver cadastrada no seu CPF, você também poderá se
                  cadastrar.
                </AccordionContent>
              </Accordion.Collapse>
            </div>
            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="3"
                onClick={onClickChangeStatus(3)}
                isOpened={status[3]}
              >
                Como essa energia chega para mim?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <AccordionContent>
                  Você locará quotas de um condomínio de uma usina solar
                  juntamente com outras empresas e/ou pessoas físicas. Esta
                  usina injetará a energia solar que for gerada no sistema da
                  distribuidora de sua região. Por sua vez, a distribuidora vai
                  continuar lhe fornecendo energia elétrica. A distribuidora
                  compensará a energia que você consumir com a energia que você
                  gerar com a sua locação de quotas do condomínio.
                </AccordionContent>
              </Accordion.Collapse>
            </div>
            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="4"
                onClick={onClickChangeStatus(4)}
                isOpened={status[4]}
              >
                Como eu sei quantas quotas eu deverei locar do condomínio?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <AccordionContent>
                  Com base na sua última conta de energia elétrica, avaliamos
                  quanta energia o condomínio precisa gerar para compensar o
                  volume de energia que você está consumindo mensalmente. Nós
                  calculamos a quantidade de quotas que você precisa locar para
                  receber o montante de energia que precisa. Isso está
                  evidenciado na sua Proposta Comercial.
                </AccordionContent>
              </Accordion.Collapse>
            </div>
            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="5"
                onClick={onClickChangeStatus(5)}
                isOpened={status[5]}
              >
                Preciso fazer algum investimento?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <AccordionContent>
                  Não. Na geração compartilhada da Copérnico você não precisa
                  fazer nenhum investimento, nenhuma obra, e nem precisa se
                  preocupar com nenhum processo jurídico ou administrativo. Tudo
                  fica sob nossa responsabilidade. Informaremos quando a usina
                  solar de que você participará entrar em operação, e cuidaremos
                  de tudo até lá. A partir do início da operação da usina, você
                  receberá a medição mensal da energia gerada.
                </AccordionContent>
              </Accordion.Collapse>
            </div>

            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="6"
                onClick={onClickChangeStatus(6)}
                isOpened={status[6]}
              >
                Quando eu começo a ter os benefícios da locação de quotas do
                condomínio?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <AccordionContent>
                  Nossas usinas têm datas determinadas para início de operação.
                  Quanto mais cedo você locar as quotas do condomínio, mais
                  rapidamente você será incluído nas usinas que estão ficando
                  prontas. Os benefícios financeiros e de sustentabilidade das
                  empresas que locam as quotas do condomínio começam a partir da
                  data de operação das usinas.
                </AccordionContent>
              </Accordion.Collapse>
            </div>

            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="7"
                onClick={onClickChangeStatus(7)}
                isOpened={status[7]}
              >
                Como eu pago pelo aluguel das quotas e pela operação e
                manutenção da usina utilizada?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <AccordionContent>
                  A Copérnico disponibilizará mensalmente uma fatura que
                  englobará os valores relativos ao aluguel das quotas e à
                  operação e manutenção da usina solar utilizada para geração
                  compartilhada de energia do condomínio do qual você loca
                  quotas. O pagamento poderá ser feito via débito automático em
                  conta corrente ou via transferência bancária. Todos os
                  pagamentos efetuados pelas locatárias deverão ser feitos
                  livres e desembaraçadas de quaisquer ônus, deduções,
                  retenções, descontos, exclusões e tributos.
                </AccordionContent>
              </Accordion.Collapse>
            </div>

            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="8"
                onClick={onClickChangeStatus(8)}
                isOpened={status[8]}
              >
                Eu continuo recebendo conta da distribuidora?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <AccordionContent>
                  Atualmente, a distribuidora cobra o montante de energia
                  elétrica que você consome todos os meses. Adicionalmente, a
                  distribuidora faz outras cobranças, tais como disponibilidade
                  de energia, impostos e, ocasionalmente, coisas como iluminação
                  pública, por exemplo. Como locatária de quotas do condomínio,
                  o montante de energia elétrica que você consome é compensado
                  pelo montante de energia elétrica gerado pelo condomínio na
                  proporção da locação de quotas que você loca. A distribuidora
                  continuará mandando a conta mensalmente, mas não cobrará pela
                  energia compensada. Ela poderá continuar cobrando a
                  disponibilidade, impostos e outros custos, mas ela só poderá
                  cobrar a energia elétrica que for consumida acima da que for
                  gerada, e que não for compensada por créditos acumulados.
                  Portanto, sim, você continuará sendo cliente da distribuidora
                  e continuará recebendo a conta mensal da distribuidora. Só que
                  passará a pagar bem menos para a distribuidora todos os meses.
                </AccordionContent>
              </Accordion.Collapse>
            </div>

            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="9"
                onClick={onClickChangeStatus(9)}
                isOpened={status[9]}
              >
                Como funciona a compensação de energia?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <AccordionContent>
                  A energia que você consome e o montante de energia gerado pelo
                  condomínio na proporção da locação de quotas que você loca são
                  medidos mensalmente. Se o que for consumido for igual ao que
                  for gerado, a distribuidora não cobrará pelo seu consumo de
                  energia elétrica. Se o que for consumido for menor do que o
                  que for gerado, a distribuidora lhe dará um crédito que pode
                  ser usado em até 60 meses a partir do faturamento daquele mês.
                  Se o que for consumido for maior do que o que for gerado, a
                  distribuidora utilizará os créditos que você gerou para
                  compensar a diferença ou, se não houver créditos, cobrará pelo
                  excedente que não está sendo compensado.
                </AccordionContent>
              </Accordion.Collapse>
            </div>

            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="10"
                onClick={onClickChangeStatus(10)}
                isOpened={status[10]}
              >
                O que acontece se a operação da usina tiver atraso?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="10">
                <AccordionContent>
                  A Copérnico trabalha com a maior seriedade e transparência
                  para implantar as usinas solares sem que você precise se
                  preocupar com os passos que vão ocorrer até a data de
                  operação. Estamos seguros de que não haverá atraso na operação
                  de nossas usinas. Contudo, se a operação não se iniciar dentro
                  de 10 meses a partir da assinatura do contrato de locação de
                  quotas e adesão ao condomínio, você poderá encerrar a sua
                  contratação mediante notificação com antecedência de 90 dias à
                  Copérnico.
                </AccordionContent>
              </Accordion.Collapse>
            </div>

            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="11"
                onClick={onClickChangeStatus(11)}
                isOpened={status[11]}
              >
                A adesão solar tem prazo mínimo de fidelidade?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="11">
                <AccordionContent>
                  <p>
                    Você poderá requerer o término do seu contrato de locação,
                    sem qualquer ônus ou penalidade, desde que o faça mediante
                    notificação escrita à Copérnico por pelo menos 12 meses a
                    partir da data da operação da usina com antecedência mínima
                    de 180 dias. Caso você não respeite a antecedência mínima, a
                    Copérnico cobrará multa equivalente a 6 vezes o valor do
                    preço mensal do seu contrato de locação de quotas. Mas, por
                    que vai querer encerrar seu contrato de locação e voltar a
                    pagar mais caro? ainda estou sujeito à volatilidade e quedas
                    de energia das distribuidoras?
                  </p>
                  <p>
                    Infelizmente, ainda não podemos estar totalmente
                    independentes das distribuidoras. Conforme a regulamentação
                    atual, as usinas fornecerão energia gerada para as
                    distribuidoras, e as distribuidoras fornecerão energia para
                    seu negócio, compensando a energia consumida com a energia
                    gerada. Portanto, ainda existe dependência da qualidade do
                    fornecimento da energia da distribuidora para seu negócio.
                  </p>
                </AccordionContent>
              </Accordion.Collapse>
            </div>

            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="12"
                onClick={onClickChangeStatus(12)}
                isOpened={status[12]}
              >
                E como funciona no caso de fornecimento de energia à noite,
                quando não tem sol?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="12">
                <AccordionContent>
                  A distribuidora tem que fornecer energia elétrica para você
                  independentemente do horário de consumo. Ela vai contabilizar
                  o total de energia consumido e gerado dentro de um mês para
                  efeito da compensação.
                </AccordionContent>
              </Accordion.Collapse>
            </div>

            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="13"
                onClick={onClickChangeStatus(13)}
                isOpened={status[13]}
              >
                Por que preciso locar quotas do condomínio para aproveitar a
                geração de energia?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="13">
                <AccordionContent>
                  A Copérnico locará quotas do condomínio a várias empresas e
                  pessoas físicas que buscam economia e sustentabilidade. Este
                  condomínio não possui personalidade jurídica própria, mas é
                  obrigado a ter CNPJ. A Copérnico será a administradora do
                  condomínio, coordenando os objetivos das diferentes empresas e
                  pessoas físicas que desejam locar as quotas do condomínio e
                  participar da operação e manutenção das usinas.
                </AccordionContent>
              </Accordion.Collapse>
            </div>

            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="14"
                onClick={onClickChangeStatus(14)}
                isOpened={status[14]}
              >
                Como eu faço para locar as quotas do condomínio?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="14">
                <AccordionContent>
                  É muito simples. Basta seguir o passo a passo indicado nos
                  links que receber, começando pela aceitação da proposta
                  comercial. Depois, você poderá assinar digitalmente o Contrato
                  de Locação de Quotas e Adesão ao Condomínio da Usina. Você
                  será instruído a nos enviar a documentação de sua empresa, a
                  qual será analisada pela Copérnico no prazo de 3 dias e,
                  estando em boa ordem, você terá locado as quotas do
                  condomínio.
                </AccordionContent>
              </Accordion.Collapse>
            </div>

            <div>
              <Accordion.Toggle
                as={AccordionHeader}
                eventKey="15"
                onClick={onClickChangeStatus(15)}
                isOpened={status[15]}
              >
                Como consorciado, o que eu preciso saber sobre o Contrato do
                Condomínio?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="15">
                <AccordionContent>
                  <p>
                    Administração do Condomínio: O condomínio será gerido
                    exclusivamente pela Copérnico, que não receberá qualquer
                    remuneração pela liderança e administração do condomínio.
                  </p>

                  <p>
                    Nesse sentido, a Copérnico (i) representará todas as
                    locatárias perante a ANEEL, órgãos governamentais,
                    judiciais, regulatórios e setoriais, bem como quaisquer
                    terceiros, incluindo a concessionária de distribuição de
                    energia elétrica do local da usina; (ii) representará as
                    locatárias em qualquer ato relacionado ao enquadramento
                    regulatório da usina, (iii) será responsável por indicar a
                    alocação dos créditos de energia para cada uma das
                    locatárias; (iv) formalizará a adesão, saída ou exclusão de
                    quaisquer das locatárias, (v) enviará mensalmente notas de
                    débito às locatárias para pagamento do aluguel e das demais
                    despesas relacionadas ao condomínio e à usina. As
                    deliberações do condomínio serão tomadas pela Copérnico, a
                    quem cabe voto exclusivo.
                  </p>

                  <p>
                    A Copérnico poderá, a seu exclusivo critério, implantar a
                    usina em qualquer localidade, desde que dentro da mesma área
                    de concessão de serviço público de distribuição de energia
                    elétrica.
                  </p>

                  <p>
                    A execução, operação e administração do condomínio e da
                    usina caberá à Copérnico, e as locatárias reconhecem que a
                    Copérnico é a única e exclusiva titular da usina, construída
                    com o fim exclusivo de fruição da energia pelas locatárias
                    na modalidade geração compartilhada sob as regras da
                    Resolução Normativa nº 482, de 17 de abril de 2012, e suas
                    atualizações subsequentes.
                  </p>

                  <p>
                    Alterações Regulatórias: Alterações realizadas pelas
                    autoridades competentes nas regulamentações aplicáveis à
                    Convenção de Condomínio ou na legislação tributária
                    aplicável que importem na criação, alteração, suspensão ou
                    extinção de tributos, alteração de alíquotas ou base de
                    cálculo ou mudança no tratamento tributário relativo à
                    locação, resultarão na majoração ou na redução automática do
                    preço, mediante notificação pela Copérnico às locatárias,
                    sem necessidade de celebração de um aditamento contratual.
                  </p>

                  <p>
                    Obrigações das Locatárias: Caberá às locatárias: (i) pagar o
                    preço do aluguel nas datas de vencimento; (ii) pagar as
                    faturas da distribuidora que continuarão a ser emitidas; e
                    (iii) prestar todas e quaisquer informações à Copérnico para
                    que ela possa cumprir com suas responsabilidades perante a
                    ANEEL, os órgãos governamentais, judiciais, regulatórios e
                    setoriais, bem como a distribuidora local.
                  </p>
                </AccordionContent>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default FAQ
