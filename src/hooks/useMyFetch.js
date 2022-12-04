import {useEffect} from 'react'

export default function useMyFetch(fn) {
  useEffect(() => {
    fn()
  }, [fn])
}