import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import classes from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className={classes.page}>
        <span className={`${classes.tags} ${classes.topTags}`}>
          <span>&lt;/html&gt;</span>
          <span className={classes.bottomTagHtml}>&lt;body&gt;</span>
        </span>

        <Outlet />

        <span className={`${classes.tags} ${classes.bottomTags}`}>
          <span className={classes.bottomTagHtml}>&lt;/body&gt;</span>
          <span>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

// export default Layout;
