import { Input } from '@nextui-org/react'
import { RiSearchEyeLine } from 'react-icons/ri'

export const SearchInput = () => (
    <Input
        bordered
        width="800px"
        placeholder="build: ms min-level: 450 hunting: winter court"
        color="default"
        clearable
        size="xl"
        contentRight={<RiSearchEyeLine size={'20px'}></RiSearchEyeLine>}
    />
)

export default { SearchInput }
