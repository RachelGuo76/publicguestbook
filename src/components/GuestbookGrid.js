import React, { Component } from "react";
import GuestbookGridCell from "./GuestbookGridCell";
import styled from "styled-components";
import GridArrow from "./GridArrow";

export default class GuestbookGrid extends Component {
    render() {
        const cells = this.props.signatures.map(({ signature = null }) =>
            <GuestbookGridCell signature={signature} />);

        return <GridContainer>
            <Grid>{cells}</Grid>
            <GridArrow />
        </GridContainer>;
    }
}

const GridContainer = styled.div`position: relative`;

const Grid = styled.div`
    border-left: ${( { theme: { borderStyle } }) => borderStyle };
    border-top: ${( { theme: { borderStyle } }) => borderStyle };
    display: flex;
    flex-wrap: wrap;
    width: 901px;

    &::before {
        position: absolute;
        background-repeat: no-repeat;
        background-image: url(https://ms-vsliveshare.gallerycdn.vsassets.io/extensions/ms-vsliveshare/vsliveshare/0.2.399/1524081584622/Microsoft.VisualStudio.Services.Icons.Default);
        background-size: 50% 70%;
        background-position: 50% 50%;
        opacity: 0.3;
        width: 100%; 
        height: 100%; 
        content: "";
    }
`;