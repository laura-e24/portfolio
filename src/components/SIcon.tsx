import * as icons from 'simple-icons';
import parse from 'html-react-parser';

interface Icon {
  slug: string;
  color?: string;
}

import styled from 'styled-components'


const StyledSvg = styled(props => props.svg)`
  svg > path {
    fill: ${props => props.color || icons[`si` + props.slug].hex}
  }
`
const SIcon = ({ slug, color }: Icon) => {
  const svg = parse(icons[`si` + slug].svg)
  return <StyledSvg svg={svg} slug={slug} color={color}  />
}

export default SIcon;