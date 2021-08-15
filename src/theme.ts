enum Colors {
  LIGHTER_GRAY = '#F9F9F9',
  LIGHT_GRAY = '#D3D3D3',
  MEDIUM_GRAY = '#888888',
  DARK_GRAY = '#575657',
  YELLOW = '#FDC700',
  ORANGE = '#F28F28',
  LIGHT_RED = '#E84F34',
  RED = '#E63531',
  BLACK = '#000000',
  WHITE = '#FFFFFF',
  LIGHT_GREEN = '#7BCC7E'
}

enum BreakPoints {
  BS_SM = '576px',
  BS_MD = '767px',
  BS_LG = '992px'
}

type TTheme = {
  colors: typeof Colors
  breakPoints: typeof BreakPoints
  borderRadius: string
}

export const theme: TTheme = {
  colors: Colors,
  breakPoints: BreakPoints,
  borderRadius: '5px'
}