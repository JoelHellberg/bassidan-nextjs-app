import React from 'react'
import MenuItem from '../MenuItem'

const DesktopMenu = () => {
  return (
    <div className="flex flex-row flex-wrap justify-end content-end space-x-10 pr-5">
      <MenuItem
        title={"Aktivitetsschema"}
        redirect={"aktivitet"}
        isMobile={false}
        setMenuIsOpen={() => undefined}
      />
      <MenuItem
        title={"Schema Basår"}
        redirect={"https://cloud.timeedit.net/liu/web/schema/ri167XQQ698Z50Qm37070gZ6y5Y7505Q6Y95Y7.html"}
        isMobile={false}
        setMenuIsOpen={() => undefined}
      />
      <MenuItem
        title={"Nolleboken"}
        redirect={"nolleboken.pdf"}
        isMobile={false}
        setMenuIsOpen={() => undefined}
      />
    </div>
  )
}

export default DesktopMenu