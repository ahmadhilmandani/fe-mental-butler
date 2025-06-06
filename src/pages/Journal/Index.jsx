import { Link } from "react-router";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Table from "../../components/Table";

export default function JournalIndex() {
  return (
    <main className="w-full min-h-screen p-10 ">
      <header className="mb-8 flex flex-wrap justify-between items-center">
        <div>
          <h1 className="dark:text-light text-3xl font-bold">
            List Jurnal-mu!
          </h1>
          <div className="text-gray-500">
            this is your journal
          </div>
        </div>
        <div>
          <Link to={'/journal/add'}>
            <Button buttonType="primary">
              Tambah Journal +
            </Button>
          </Link>
        </div>
      </header>
      <div className="h-fit max-h-screen">
        <Card isExtend={true}>
          <Table></Table>
        </Card>
      </div>
    </main>
  )
}