import styled from "styled-components";
import {Alert} from "antd";

export const AlertSmall = styled(Alert)`
    max-width: 300px;
    margin: auto;
    margin-bottom: 10px;
`;

export const AlertMedium = styled(Alert)`
    max-width: 400px;
    margin: auto;
    margin-bottom: 10px;
    @media (max-width: 500px) {
      width: 350px;
    }
`;