import React from 'react'
import * as Checklist from './'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Checklist',
  icon: 'Checklist',
  examples: {
    require: `import * as Checklist from '@klarna/ui/Checklist'`,
    type: LIVE,

    examples: {
      Regular: <Checklist.Main>
        <Checklist.Item>Just one click and you're done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it!</Checklist.Item>
      </Checklist.Main>,

      'Header and footer': <Checklist.Main title='this is the title'>
        <Checklist.Item>Just one click and you're done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it!</Checklist.Item>
        <Checklist.Footer><a href='http://google.com'>This is the footer</a></Checklist.Footer>
      </Checklist.Main>,

      Chromeless: <Checklist.Main chromeless>
        <Checklist.Item>Just one click and you're done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
      </Checklist.Main>
    }
  }
}
