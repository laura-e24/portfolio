import Image from 'next/image';

interface InterfaceIcon {
  slug: string;
  color?: string;
  width?: number;
  height?: number;
  alt?: string;
  dataToolTipId?: string;
  dataToolTipContent?: string;
}

const SIcon = ({ slug, color, width, height, alt, dataToolTipId, dataToolTipContent }: InterfaceIcon) => {
  return (
    <Image 
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      height={height || 32}
      width={width || 32}
      alt={alt || ""}
      data-tooltip-id={dataToolTipId}
      data-tooltip-content={dataToolTipContent}
    />
  )
}

export default SIcon;