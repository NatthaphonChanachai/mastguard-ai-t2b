import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 256, height: 256 }
export const contentType = 'image/png'

export default function Icon() {
  const imgBuffer = readFileSync(join(process.cwd(), 'src/app/T2B_Logo.png'))
  const imgSrc = `data:image/png;base64,${imgBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '256px',
          height: '256px',
          borderRadius: '60px',
          overflow: 'hidden',
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgSrc} alt="" width={256} height={256} />
      </div>
    ),
    { width: 256, height: 256 }
  )
}
