import SettingsIcon from '@mui/icons-material/Settings';
import { HeaderContainer, IconContainer, iconStyle, LogoContainer } from "./HeaderStyle";

interface Props {
    onClickSetting?: () => void
    onClickLogo?: () => void
}

const Header = ({ onClickSetting, onClickLogo }: Props) => {
   
    return (
        <HeaderContainer>
            <LogoContainer onClick={onClickLogo}>Logo here</LogoContainer>
            <IconContainer onClick={onClickSetting}>
                <SettingsIcon
                    sx={iconStyle}
                    color="primary" />
            </IconContainer>
        </HeaderContainer>
    )
}

export default Header