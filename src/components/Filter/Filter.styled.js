import styled from 'styled-components';

export const FilterInput = styled.input`
  padding: ${p => p.theme.spacing(2)};
  border-radius: ${props => props.theme.radii.md};
  margin-bottom: ${p => p.theme.spacing(4)};
  font-size: 20px;
  font-weight: 500;

  &::placeholder {
    color: ${props => props.theme.colors.gray};
    opacity: 0.5;
  }
`;
