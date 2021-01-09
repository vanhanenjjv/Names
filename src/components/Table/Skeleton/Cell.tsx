import * as Material from "@material-ui/core";


interface CellProps {
  numeric: boolean;
};

const Cell: React.FC<CellProps> = ({ numeric, children }) => {
  return (
    <Material.TableCell align={numeric ? 'right' : 'left'}>
      {children}      
    </Material.TableCell>
  );
}


export default Cell;

