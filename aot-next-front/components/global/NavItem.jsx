import { motion, AnimatePresence } from 'framer-motion';

import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function NavItem({ routeData, styles, subMenu, toggle, handleOver, handleOut }){

  const router = useRouter();
  const selected = router.pathname === routeData.href ? true : false;
  const selectedSub = subMenu && routeData.id === parseInt(router.query.id) ? true : false

  const routePath = subMenu ? { pathname: '/services/service', query: { id: routeData.id} } : { pathname: routeData.href };

  const handleClick = (e) =>{
    e.preventDefault();
    router.push(routePath)
  }

  
  return(
    <a className={ selected || selectedSub ? styles.selected : '' } 
      href={ routePath.pathname } 
      onClick={(e) => { handleClick(e) }} 
      onMouseOver={(e) => { toggle ? handleOver(e, toggle) : '' }}
      onMouseOut={(e) => { toggle ? handleOut(e, toggle) : '' }}
    >
      <li>
        { routeData.title }
        { routeData.children &&  <FontAwesomeIcon className={ styles.icon } icon={ faChevronDown }/> }
      </li>
    </a>
  );
}