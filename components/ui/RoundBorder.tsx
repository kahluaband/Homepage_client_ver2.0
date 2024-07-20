interface BorderProps {
    className: string;
}

const TopRightRoundBorder: React.FC<BorderProps> = ({ className }) => {
    return (
        <div className={`w-[68px] h-[68px] rounded-tr-full bg-gray-90/0 border-gray-0 border-t-[20px] border-r-[20px] border-l-0 border-b-0 z-10 ${className}`}/>
    )
};

export default TopRightRoundBorder;