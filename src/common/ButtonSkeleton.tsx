import React from "react";
import styled from 'styled-components';


const Skeleton = styled.button<{
    width: number;
    height: number;
    color: string;
    src?: string;
}>`

`

interface SkeletonButtonProps {
    width: number;
    height: number;
    color: string;
    src?: string;
    children?: JSX.Element[] | JSX.Element;
}

function SkeletonButton({width, height, color, src, children}: SkeletonButtonProps){
    return(
        <Skeleton width={width} height={height} color={color} src={src}>{children}</Skeleton>
    )
}