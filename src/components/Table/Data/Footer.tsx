import React from 'react';

import * as Material from '@material-ui/core';


interface FooterProps {
  rowsPerPage: number;
  count: number;
  page: number;
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (rowsPerPage: number) => void;
}

const Footer: React.FC<FooterProps> = props => {
  const { rowsPerPage, count, page, onChangePage, onChangeRowsPerPage } = props;

  const changePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) =>
    onChangePage(page);

  const changeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChangeRowsPerPage(Number(event.target.value));

  return (
    <Material.TableFooter>
      <Material.TableRow>
        <Material.TablePagination
          rowsPerPage={rowsPerPage}
          count={count}
          page={page}
          onChangePage={changePage}
          onChangeRowsPerPage={changeRowsPerPage} />
      </Material.TableRow>
    </Material.TableFooter>
  );
}


export default Footer;
