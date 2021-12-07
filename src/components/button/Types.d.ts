export interface IButtonProps {
    result: string;
    setResult: (result: string) => void;
}

export interface Item {
    symbol: string | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    type: string,
    key: number,
    value: string | null,
    onclick: () => void,
    className: string,
    id: string,
}