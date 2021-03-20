import { Summary } from '../Dashboard/Summary'
import { TransactionTable } from '../Dashboard/TransactionsTable'
import { Container } from './style'

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <TransactionTable />
    </Container>
  )
}