import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  Button,
  Container,
  DeliveryContent,
  FormOfPayment,
  Grid,
  Location,
  Payment,
  PaymentContent,
} from './styles'

export function Shopping() {
  return (
    <div>
      <Grid>
        <div>
          <h3>Complete seu pedido</h3>
          <Container>
            <DeliveryContent>
              <Location>
                <MapPin size={23} weight="light" />
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </Location>

              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <span>Opcional</span>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </DeliveryContent>

            <PaymentContent>
              <Payment>
                <CurrencyDollar size={23} weight="fill" />
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </Payment>

              <FormOfPayment>
                <Button>
                  <CreditCard size={16} weight="light" />
                  <span>Cartão de crédito</span>
                </Button>
                <Button>
                  <Bank size={16} weight="light" />
                  <span>Cartão de débito</span>
                </Button>
                <Button>
                  <Money size={16} weight="light" />
                  <span>Dinheiro</span>
                </Button>
              </FormOfPayment>
            </PaymentContent>
          </Container>
        </div>
        <div>
          <h3>Cafés selecionados</h3>
        </div>
      </Grid>
    </div>
  )
}
