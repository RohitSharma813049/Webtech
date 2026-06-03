"use client"

import { memo } from "react"
import {
  FaChartLine,
  FaSearchDollar,
  FaHashtag,
  FaWhatsapp,
  FaPenFancy,
  FaHandshake,
  FaAmazon,
  FaLinkedin,
  FaPinterest,
  FaCamera,
  FaBullhorn,
  FaCode,
  FaGlobe,
  FaShoppingCart,
  FaCalendarCheck,
  FaKey,
  FaMobileAlt,
  FaDesktop,
  FaPlug,
  FaWrench,
  FaBolt,
  FaShieldAlt,
  FaRobot,
  FaCloud,
  FaCloudUploadAlt,
  FaDumbbell,
  FaUsers,
  FaShoppingBag,
  FaServer,
  FaGraduationCap,
  FaBookOpen,
  FaUserTie,
  FaStar,
  FaMobile,
  FaPalette,
  FaMagic,
  FaImage,
  FaRegImage,
  FaBook,
  FaBriefcase,
  FaFileAlt,
  FaHeart,
  FaFile,
} from "react-icons/fa"
import { SiGoogleads, SiGooglemaps, SiFigma } from "react-icons/si"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaChartLine,
  FaSearchDollar,
  FaHashtag,
  FaWhatsapp,
  FaPenFancy,
  FaHandshake,
  FaAmazon,
  FaLinkedin,
  FaPinterest,
  FaCamera,
  FaBullhorn,
  FaCode,
  FaGlobe,
  FaShoppingCart,
  FaCalendarCheck,
  FaKey,
  FaMobileAlt,
  FaDesktop,
  FaPlug,
  FaWrench,
  FaBolt,
  FaShieldAlt,
  FaRobot,
  FaCloud,
  FaCloudUploadAlt,
  FaDumbbell,
  FaUsers,
  FaShoppingBag,
  FaServer,
  FaGraduationCap,
  FaBookOpen,
  FaUserTie,
  FaStar,
  FaMobile,
  FaPalette,
  FaMagic,
  FaImage,
  FaRegImage,
  FaBook,
  FaBriefcase,
  FaFileAlt,
  FaHeart,
  FaFile,
  SiGoogleads,
  SiGooglemaps,
  SiFigma,
  FaFigma: SiFigma,
}

interface ServiceIconProps {
  iconName?: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export const ServiceIcon = memo(function ServiceIcon({
  iconName,
  className = "",
  size = "md",
}: ServiceIconProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    lg: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
  }

  if (!iconName || !iconMap[iconName]) {
    return null
  }

  const IconComponent = iconMap[iconName]
  return <IconComponent className={`${sizeClasses[size]} ${className}`} />
})

ServiceIcon.displayName = "ServiceIcon"
