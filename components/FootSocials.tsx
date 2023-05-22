import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

type Props = {
    heading: string;
    links?: any;
}

function FootSocials({ heading, links }: Props) {
  const { facebook,twitter,instagram,youtube } = links;
  return (
    <div className="space-y-3 md:space-y-6">
        <h1 className="text-lg text-center md:text-left font-serif tracking-wide">{ heading }</h1>
        <div className="flex items-center justify-center space-x-8">
            { twitter ?
                <Link href={twitter}>
                    <FaTwitter className="h-7 w-7" />
                </Link> : null
            }
            { facebook ?
                <Link href={facebook}>
                    <FaFacebookF className="h-6 w-6" />
                </Link> : null
            }
            { instagram ?
                <Link href={instagram}>
                    <FaInstagram className="h-6 w-6" />
                </Link> : null
            }
            { youtube ?
                <Link href={youtube}>
                    <FaYoutube className="h-7 w-7" />
                </Link> : null
            }
        </div>
    </div>
  )
}

export default FootSocials