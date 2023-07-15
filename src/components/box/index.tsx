type BoxProps = {
  name: string
  percent: number
  value?: number
}

const Box = ({ name, percent, value }: BoxProps) => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <h3>{name}</h3>
      <p>{percent}%</p>
    </div>
    {typeof value === 'number' && !isNaN(value) && (
      <p>
        Guarde{' '}
        <span>
          {(value * (percent / 100)).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </span>
      </p>
    )}
  </div>
)

export default Box
