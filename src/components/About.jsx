import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa6'

const About = () => {
  return (
    <div className='padding flex flex-col items-center gap-12 overflow-hidden pb-32 bg-card'>
      <div className='bg-primary w-screen h-20 md:h-48 relative'>
        <div className='w-full h-20 md:h-48 absolute bg-card bottom-0 rounded-tl-[100%]'></div>
      </div>
      <h1 className='text-4xl lg:text-5xl text-primary pb-10 font-kodchasan_B'>About</h1>
      <div className='flex flex-col md:flex-row justify-center gap-10 w-full lg:gap-20'>
        <img src="/img/marvin.jpg" alt="profile" className='h-auto max-w-[350px] md:w-full w-full self-center rounded-tl-[40%] rounded-br-[40%] border border-primary object-cover size-96'/>
        <div className="shrink-0 bg-border w-[2px] hidden lg:flex h-[400px] self-center"></div>
        <div className='flex flex-col gap-5 text-sm w-full md:w-1/2'>
            <div>
                <h1 className='text-xl lg:text-2xl font-kodchasan_M text-primary'>Daryll Villanueva</h1>
                <div className="shrink-0 w-24 lg:w-36 h-[3px] rounded-full bg-primary"></div>
            </div>
            <p className='text-muted-foreground'>Hello there! Welcome to my Portfolio</p>
            <p className='text-muted-foreground'>I'm currently self-studying about web development. I'm motivated to develop websites that are not only functional but also user-friendly and visually appealing.</p>
            <p className='text-muted-foreground'>My goal is to improve my technical skills and widen my knowledge of both frond-end and back-end development, and to stay updated with latest industry trends.</p>
            <div className='mt-auto flex flex-col sm:flex-row md:flex-col xl:flex-row items-center sm:justify-between w-full gap-5'>
              <div className='flex items-center gap-5 w-full text-primary sm:w-auto font-kodchasan_M'>
                <Button variant="default" size="lg">Contact</Button>
                <Button variant="outline" size="lg">View CV</Button>
              </div>
              <div className='flex items-center'>
                <Link target='_blank' to="https://github.com/daryllvillanueva">
                  <Button variant="ghost" size="sm">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="about">
                      <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" className='fill-current text-primary'/>
                    </svg>
                  </Button> 
                </Link>
                <Link target='_blank' to="https://github.com/daryllvillanueva">
                  <Button variant="ghost" size="sm">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="about">
                      <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" className='fill-current text-primary'/>
                    </svg>
                  </Button>
                </Link>               
                <Link target='_blank' to="https://github.com/daryllvillanueva">
                  <Button variant="ghost" size="sm">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="about">
                      <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" className='fill-current text-primary'/>
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About