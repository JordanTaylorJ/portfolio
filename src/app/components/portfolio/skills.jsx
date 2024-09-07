const Skills = () => {

    const list = [
        'JavaScript', 'React', 'Ruby', 'Ruby on Rails', 'Python', 'CSS', 'HTML', 'Tailwind CSS', 'Material UI', 'Next.js','JSON', 'SQL', 'PostgreSQL', 'Postman', 
        'REST API', 'MVC Architecture', 'Wireframes', 'Excel', 'Visio', 'Tableau', 
    ]

    return(
        <main id='Skills' className="min-h-screen py-24">
        
        <h2 className="text-center text-2xl md:text-3xl  text-brown">Expertise</h2>
        
        <div className='p-16 grid lg:grid-cols-4'>
            <a className="m-10 mx-40 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"  fill="currentColor">
                    <path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30" fill="currentColor">
                    <path d="M 13 3 C 10.791 3 9 4.791 9 7 L 9 8 L 14 8 C 14.552 8 15 8.448 15 9 C 15 9.552 14.552 10 14 10 L 9 10 L 8 10 L 7 10 C 4.791 10 3 11.791 3 14 L 3 18 C 3 20.209 4.791 22 7 22 L 8 22 L 8 17 C 8 15.346 9.346 14 11 14 L 19 14 C 19.552 14 20 13.552 20 13 L 20 7 C 20 4.791 18.209 3 16 3 L 13 3 z M 12 5 C 12.552 5 13 5.448 13 6 C 13 6.552 12.552 7 12 7 C 11.448 7 11 6.552 11 6 C 11 5.448 11.448 5 12 5 z M 22 8 L 22 13 C 22 14.654 20.654 16 19 16 L 11 16 C 10.448 16 10 16.448 10 17 L 10 23 C 10 25.209 11.791 27 14 27 L 17 27 C 19.209 27 21 25.209 21 23 L 21 22 L 16 22 C 15.448 22 15 21.552 15 21 C 15 20.448 15.448 20 16 20 L 21 20 L 22 20 L 23 20 C 25.209 20 27 18.209 27 16 L 27 12 C 27 9.791 25.209 8 23 8 L 22 8 z M 18 23 C 18.552 23 19 23.448 19 24 C 19 24.552 18.552 25 18 25 C 17.448 25 17 24.552 17 24 C 17 23.448 17.448 23 18 23 z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="44" height="44" viewBox="0 0 50 50" fill="currentColor">
                    <path d="M 3.125 23.160156 L 8.183594 14.480469 C 8.230469 14.394531 8.292969 14.316406 8.363281 14.253906 L 17.441406 5.792969 C 17.539063 5.703125 17.65625 5.632813 17.78125 5.585938 L 25.578125 2.722656 L 32.152344 7.316406 L 28.878906 17.722656 L 16.597656 29.132813 L 6.582031 31.378906 Z M 7.296875 33.269531 L 11.96875 46.628906 L 15.8125 31.355469 Z M 42.484375 2.875 L 35.074219 6.992188 L 47.355469 15.910156 C 47.613281 14.761719 47.914063 13.195313 47.984375 11.863281 C 47.980469 11.847656 47.980469 11.828125 47.980469 11.808594 C 48.019531 9.910156 47.707031 7.925781 46.675781 6.210938 C 45.75 4.667969 44.359375 3.539063 42.535156 2.828125 C 42.519531 2.84375 42.507813 2.863281 42.484375 2.875 Z M 34.375 35.578125 L 29.296875 20.058594 L 18.988281 29.644531 Z M 31.144531 19.269531 L 36.1875 34.679688 C 40.132813 30.386719 44.171875 25.246094 46.476563 18.925781 Z M 45.382813 16.949219 L 33.851563 8.578125 L 31.117188 17.269531 Z M 5.761719 34.9375 L 2.335938 40.816406 C 3.507813 46.242188 7.566406 47.457031 10.242188 47.753906 Z M 4.878906 32.484375 L 2 25.644531 L 2 37.421875 Z M 39.921875 2.011719 C 39.90625 2.007813 39.890625 2 39.871094 2 L 28.039063 2 L 33.3125 5.6875 Z M 17.875 31.355469 L 13.777344 47.632813 C 22.109375 46.40625 28.359375 41.929688 33.425781 37.355469 Z M 44.546875 45.648438 C 44.3125 45.648438 44.074219 45.566406 43.882813 45.398438 L 35.617188 38.058594 C 31.984375 41.429688 27.742188 44.855469 22.519531 47.164063 L 44.5625 45.667969 C 44.691406 45.660156 44.8125 45.621094 44.925781 45.570313 C 44.804688 45.621094 44.675781 45.648438 44.546875 45.648438 Z M 37.0625 36.667969 L 45.210938 43.902344 C 45.382813 44.054688 45.472656 44.253906 45.511719 44.460938 L 47.195313 22.414063 C 44.582031 28.078125 40.742188 32.730469 37.0625 36.667969 Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                    <path d="M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9490442 22.90625 7.4003906 C 21.147758 5.9699557 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.402173 12.173992 10.761719 14.412109 C 10.886606 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671663 41.430886 26.366333 42.068604 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.411762 46.164908 36.746094 45.394531 C 38.080426 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.85335 39.195312 35.615234 C 39.031899 34.598012 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677708 15.800829 32.436969 15.435424 30.048828 15.220703 C 28.849094 13.558465 27.615953 12.046374 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015451 7.6275969 21.642578 8.9511719 C 22.266889 9.4590141 22.905452 10.045872 23.548828 10.671875 C 22.296955 12.025781 21.055175 13.553705 19.847656 15.230469 C 17.468002 15.449155 15.235261 15.818024 13.199219 16.3125 C 13.012686 15.546898 12.84964 14.799095 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.236451 12.677734 8.9121094 C 12.960128 7.5877677 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791064 13.028975 26.606064 13.9993 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.912587 18.402344 28.808594 C 17.668186 27.536996 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.550781 17.410156 C 33.198531 17.615819 34.745652 17.90154 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725727 19.244455 32.142026 18.315962 31.550781 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398795 20.758095 13.190852 22.834207 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 25 22 C 26.668699 22 28 23.331301 28 25 C 28 26.668699 26.668699 28 25 28 C 23.331301 28 22 26.668699 22 25 C 22 23.331301 23.331301 22 25 22 z M 34.619141 27.363281 C 35.143596 28.604493 35.599462 29.819048 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765554 28.981192 34.200846 28.17048 34.619141 27.363281 z M 15.341797 27.365234 C 15.762305 28.177437 16.200272 28.991753 16.671875 29.808594 C 17.041066 30.448052 17.418053 31.072363 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.646655 35.905245 22.092677 37.70929 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842786 33.979991 37.069087 34.989811 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.466746 43.24604 35.746094 43.662109 C 35.025442 44.078178 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.397794 28.314453 41.074219 C 27.678439 40.556858 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882145 35.473968 21.867188 34.101562 z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.395 7.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293 4.902 7.684 4.899 8.32 5.29 8.71 5.67 9.092 6.28 9.104 6.672 8.74c.01-.009.02-.019.03-.028.552-.426 4.03-.012 5.55 1.196C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658C24.121 7.844 23.882 7.291 23.395 7.081zM18.395 14.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293-.391.391-.394 1.027-.003 1.417.38.382.991.395 1.383.03.01-.009.02-.019.03-.028.551-.426 4.031-.012 5.55 1.196C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658C19.121 14.844 18.882 14.291 18.395 14.081z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M 10.03125 9.5742188 C 9.78025 9.5742188 9.5228594 9.5890938 9.2558594 9.6210938 L 9.4082031 10.099609 C 9.6432031 10.074609 9.8763281 10.066406 10.111328 10.066406 L 10.193359 10.066406 L 10.03125 9.5742188 z M 13.117188 10.050781 L 13.085938 10.583984 C 13.352938 10.673984 13.611141 10.771953 13.869141 10.876953 L 13.902344 10.333984 C 13.829344 10.293984 13.626187 10.196781 13.117188 10.050781 z M 6.4667969 10.357422 C 6.2647969 10.462422 6.0539375 10.575078 5.8359375 10.705078 L 6.2070312 11.271484 C 6.4170312 11.141484 6.6200781 11.021016 6.8300781 10.916016 L 6.4667969 10.357422 z M 10.134766 10.382812 C 9.9080981 10.384485 9.6785937 10.396797 9.4492188 10.419922 C 7.0892188 10.629922 4.19 12.779609 2.5 15.599609 C 0.8 18.429609 0.5703125 20.830078 0.5703125 20.830078 L 6.9492188 20.830078 C 6.9492187 20.830078 5.7295312 15.26 9.7695312 13 C 10.609531 12.59 13.220937 11.109219 17.460938 13.949219 L 17.779297 13.660156 C 16.579297 12.628906 13.534778 10.357727 10.134766 10.382812 z M 13.101562 12.589844 L 13.070312 13.097656 C 13.337312 13.105656 13.602141 13.138313 13.869141 13.195312 L 13.902344 12.693359 C 13.628344 12.637359 13.360563 12.605844 13.101562 12.589844 z M 11.210938 12.783203 C 10.935938 12.863203 10.702 12.953969 10.5 13.042969 L 10.685547 13.599609 C 10.919547 13.486609 11.154672 13.389406 11.388672 13.316406 L 11.210938 12.783203 z M 3.2011719 12.816406 C 2.9911719 13.018406 2.7895156 13.219875 2.6035156 13.421875 L 3.2246094 13.955078 C 3.3946094 13.737078 3.5813906 13.518406 3.7753906 13.316406 L 3.2011719 12.816406 z M 8.9882812 14.011719 C 8.8022813 14.182719 8.6313281 14.366734 8.4863281 14.552734 L 8.875 15.134766 C 9.012 14.932766 9.1735625 14.746547 9.3515625 14.560547 L 8.9882812 14.011719 z M 10.150391 15.164062 L 10.150391 20.726562 L 11.503906 20.726562 L 11.503906 19.189453 L 11.675781 19.367188 L 12.945312 20.726562 L 15 20.726562 L 13.216797 18.927734 L 13.429688 18.908203 C 13.482687 18.903203 14.753906 18.768547 14.753906 17.060547 C 14.753906 15.349547 13.195672 15.170063 13.138672 15.164062 L 10.150391 15.164062 z M 17.109375 15.203125 C 16.059375 15.203125 15.705078 16.168422 15.705078 16.607422 L 15.705078 20.726562 L 17.082031 20.726562 L 17.082031 19.716797 L 18.761719 19.716797 L 18.761719 20.726562 L 20.087891 20.726562 L 20.087891 16.607422 C 20.087891 15.462422 19.049547 15.203125 18.685547 15.203125 L 17.109375 15.203125 z M 21.007812 15.203125 L 21.007812 20.724609 L 22.449219 20.724609 L 22.449219 15.203125 L 21.007812 15.203125 z M 23.318359 15.203125 L 23.318359 20.726562 L 26.960938 20.726562 L 26.960938 19.447266 L 24.753906 19.447266 L 24.753906 15.203125 L 23.318359 15.203125 z M 29.03125 15.203125 C 28.43925 15.203125 27.619141 15.698859 27.619141 16.630859 L 27.619141 17.140625 C 27.619141 18.098625 28.46225 18.544922 29.03125 18.544922 L 29.748047 18.546875 C 29.861047 18.543875 30.376953 18.544922 30.376953 18.544922 L 30.376953 19.455078 L 27.699219 19.462891 L 27.699219 20.724609 L 30.244141 20.724609 C 30.770141 20.724609 31.616484 20.343266 31.646484 19.322266 L 31.646484 18.755859 C 31.646484 17.877859 30.933141 17.353516 30.244141 17.353516 L 28.826172 17.353516 L 28.826172 16.474609 L 31.4375 16.474609 L 31.4375 15.203125 L 29.03125 15.203125 z M 7.5585938 16.265625 C 7.4525937 16.565625 7.3794531 16.86525 7.3144531 17.15625 L 7.9707031 17.673828 C 8.0027031 17.358828 8.059625 17.042562 8.140625 16.726562 L 7.5585938 16.265625 z M 17.667969 16.369141 L 18.207031 16.369141 C 18.629031 16.369141 18.749906 16.637203 18.753906 16.783203 L 18.753906 18.283203 L 17.074219 18.283203 L 17.074219 16.783203 C 17.074219 16.779203 17.081969 16.369141 17.667969 16.369141 z M 11.505859 16.408203 L 12.884766 16.414062 C 12.900766 16.421062 13.296875 16.576062 13.296875 17.164062 C 13.296875 17.751063 12.895797 17.913734 12.841797 17.927734 L 11.505859 17.927734 L 11.505859 16.408203 z M 0.40429688 16.591797 C 0.25129687 16.938797 0.081 17.342547 0 17.560547 L 0.9296875 17.900391 C 1.0346875 17.625391 1.2039844 17.228687 1.3339844 16.929688 L 0.40429688 16.591797 z M 7.1933594 19.208984 C 7.2093594 19.636984 7.2510156 19.984562 7.2910156 20.226562 L 8.2617188 20.574219 C 8.1887187 20.259219 8.1154063 19.903437 8.0664062 19.523438 L 7.1933594 19.208984 z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M20,23.474V31.5c0,0.828-0.672,1.5-1.5,1.5S17,32.328,17,31.5v-13c0-0.659,0.431-1.241,1.062-1.435 c0.627-0.19,1.314,0.049,1.682,0.596l0.249,0.37L20,18l15.234,22.546C40.524,36.947,44,30.88,44,24c0-11.046-8.954-20-20-20 S4,12.954,4,24s8.954,20,20,20c3.082,0,5.99-0.718,8.597-1.963L20,23.474z M28,16.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 v12.79l-3-4.304V16.5z"></path>
                </svg>
            </a>
        <div className='col-span-3 flex justify-center m-10'>
            <ul className="list-image-[url('/star.png')] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 bg-white shadow-lg text-sm md:text-base lg:text-lg  text-brown">
                {list.map(item => {
                    return(<li className='m-2' key={item}>{item}</li>)
                })}
            </ul>
        </div>
        </div>
        
        </main>
    )
}

export default Skills;

/*

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path>
</svg>


*/