import { DocPage } from '@/templates'
import { Expander } from '@/components'

export default function ExpanderPage({ doc }) {
  return (
    <DocPage title="Expander" markdown={doc}>
      <div className="flex flex-col gap-2">
        <Expander title="Expander 1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit
          dolorum quaerat nesciunt. Sequi deleniti perferendis odit dignissimos
          quos recusandae esse. Hic quo tempora repellendus natus dolorum sequi,
          distinctio nihil.
        </Expander>

        <Expander title="Expander 2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit
          dolorum quaerat nesciunt. Sequi deleniti perferendis odit dignissimos
          quos recusandae esse. Hic quo tempora repellendus natus dolorum sequi,
          distinctio nihil.
        </Expander>

        <Expander title="Expander 3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit
          dolorum quaerat nesciunt. Sequi deleniti perferendis odit dignissimos
          quos recusandae esse. Hic quo tempora repellendus natus dolorum sequi,
          distinctio nihil, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Placeat cum maxime harum reiciendis suscipit? Culpa repellendus,
          blanditiis itaque excepturi dolores fugit voluptatem numquam mollitia
          atque ab perspiciatis architecto facilis cupiditate.
        </Expander>
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Expander/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
