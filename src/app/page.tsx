import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface FutureListProps {
  title: string
  description: string
}

const futureListData: FutureListProps[] = [
  {
    title: 'Обширный каталог',
    description:
      'все авторизованные пользователи имеют возможность пополнять каталог приборами сферы автоматизации'
  },
  {
    title: 'Личная панель пользователя',
    description:
      'каждый сможет иметь возможность взаимодействовать как с системой сайта, так и с другими пользвателями'
  },
  {
    title: 'Общение на интересные темы',
    description:
      'реализована возможность общаться как в личной беседе, так и в группе'
  }
]

const HomePage = () => {
  return (
    <>
      <div className='flex flex-col container mx-auto px-6 xl:px-4'>
        <section className='gap-5 w-full flex flex-1 items-center'>
          <div className='hidden xl:w-2/4 xl:flex items-center justify-center'>
            <Image
              src={'/hero.svg'}
              width={600}
              height={400}
              alt={'Hero Picture'}
            />
          </div>
          <div className='w-full xl:w-2/4 flex flex-col items-start'>
            <div className='flex flex-col w-full gap-3'>
              <h1 className='font-semibold text-4xl text-center sm:text-left sm:font-extrabold sm:text-4xl dark:text-drPurple text-drComment'>
                Добро пожаловать, друг, на
                официальный сайт Кафедры
                Автоматизации и ИТ
              </h1>
              <span className='font-light'>
                Официальный сайт Кафедры
                Автоматизации и ИТ позволяет
                будучи студентами управлять
                каталогом приборов разного
                предназначения в сфере
                автоматизации. Для преподавателей
                реализована дополнительная
                проверка знаний и умений
                студентов, полученных в ходе
                обучения.
              </span>
              <ul className='flex flex-col gap-4'>
                {futureListData.map(
                  (item, idx) => (
                    <li
                      key={idx}
                      className='flex items-center'>
                      <div className='flex items-start justify-center text-drComment'>
                        <CheckCircleIcon className='h-5 w-5' />
                      </div>
                      <div className='flex items-start w-wull text-sm ml-3'>
                        {item.title}:{' '}
                        {item.description}
                      </div>
                    </li>
                  )
                )}
              </ul>
              <div className='flex flex-col sm:flex-row w-full items-center justify-center sm:mt-14 mt-7 gap-4'>
                <button
                  className='
                    dark:bg-drGreen
                    bg-drComment
                    px-4
                    py-3
                    rounded-md
                    dark:text-drCurrentLine
                    text-drForeground
                    font-semibold
                    '>
                  Авторизация
                </button>
                <button
                  className='
                    bg-drComment
                    px-4
                    py-3
                    rounded-md
                    text-drForeground
                    font-semibold
                    '>
                  Служба поддержки
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default HomePage
